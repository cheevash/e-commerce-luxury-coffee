# Vercel Deployment Guide

Deploying your Next.js 14 App Router project to Vercel is highly optimized and straightforward.

## Prerequisites

1. Ensure your code is pushed to a Git repository (GitHub, GitLab, or Bitbucket).
2. Ensure you have your Supabase URL and Anon Key ready (from `.env.local`).

## Steps to Deploy

1. Log in to [Vercel](https://vercel.com).
2. Click **"Add New" -> "Project"**.
3. **Import** your Git repository for the `e-commerce-luxury-coffee` project.
4. **Configure Project Details**:
   - **Framework Preset**: Vercel should automatically detect `Next.js`.
   - **Root Directory**: Leave empty (unless you placed the project in a subfolder).
5. **Environment Variables**:
   Open the "Environment Variables" dropdown and add your Supabase keys:
   - Name: `NEXT_PUBLIC_SUPABASE_URL` | Value: `your_supabase_url`
   - Name: `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Value: `your_supabase_anon_key`
6. Click **Deploy**.

Vercel will build the Next.js application, optimize the images via the `next/image` component, and generate serverless functions for the API routes and server components.

## Post-Deployment

- If you add new products to Supabase, the ISR (Incremental Static Regeneration) is configured to revalidate pages every 60 seconds (`export const revalidate = 60`), meaning your live site will update seamlessly.
- Connect a custom domain in the **Settings -> Domains** tab of your Vercel project panel.
