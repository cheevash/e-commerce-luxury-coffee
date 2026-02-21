// Removed "use server" for static export compatibility

export async function subscribeToNewsletter(prevState: any, formData: FormData) {
  const email = formData.get("email");

  if (!email || typeof email !== "string" || !email.includes("@")) {
    return { message: "Invalid email address", success: false };
  }

  // Simulate API delay for optimistic UI feeling
  await new Promise((resolve) => setTimeout(resolve, 1500));

  console.log(`Subscribed: ${email}`);

  return { message: "Welcome to The Reserve!", success: true };
}
