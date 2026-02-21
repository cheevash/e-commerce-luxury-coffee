"use client";

import { useActionState, useOptimistic, useRef } from "react";
import { Mail, CheckCircle, AlertCircle } from "lucide-react";
import { subscribeToNewsletter } from "@/app/actions/newsletter";

export default function NewsletterForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, isPending] = useActionState(subscribeToNewsletter, {
    message: "",
    success: false,
  });

  // Adding optimistic UI: if the request is pending, assume success temporarily
  const [optimisticState, addOptimisticState] = useOptimistic(
    state,
    (currentState, newState: { message: string; success: boolean }) => newState
  );

  return (
    <div>
      <h4 className="font-serif text-lg text-luxury-white mb-6 tracking-wide">The Reserve</h4>
      <p className="text-sm text-luxury-gray mb-6">
        Subscribe to receive exclusive access to rare micro-lots and member-only events.
      </p>
      
      {optimisticState.success ? (
        <div className="flex items-center gap-2 text-luxury-gold animate-fade-in-up">
          <CheckCircle className="w-5 h-5" />
          <span className="text-sm uppercase tracking-widest">{optimisticState.message}</span>
        </div>
      ) : (
        <form
          ref={formRef}
          action={(formData) => {
            addOptimisticState({ message: "Subscribing...", success: true }); // Optimistic update
            formAction(formData);
            formRef.current?.reset();
          }}
          className="flex border-b border-luxury-gray/50 pb-2 isolate focus-within:border-luxury-gold transition-colors duration-300 relative group"
        >
          <input
            type="email"
            name="email"
            placeholder="YOUR EMAIL"
            required
            disabled={isPending}
            className="bg-transparent border-none outline-none text-sm flex-grow uppercase tracking-widest placeholder:text-luxury-gray/50 text-luxury-white disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={isPending}
            className="text-luxury-gold hover:text-luxury-lightGold transition-colors duration-300 disabled:opacity-50"
          >
            {isPending ? (
              <div className="w-5 h-5 border-2 border-luxury-gold/30 border-t-luxury-gold rounded-full animate-spin" />
            ) : (
              <Mail strokeWidth={1.5} className="w-5 h-5" />
            )}
          </button>
        </form>
      )}
      
      {!optimisticState.success && optimisticState.message && (
        <div className="mt-3 flex items-center gap-2 text-red-400 text-xs uppercase tracking-widest animate-fade-in-up">
          <AlertCircle className="w-4 h-4" />
          <span>{optimisticState.message}</span>
        </div>
      )}
    </div>
  );
}
