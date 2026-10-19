import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Pages anyone may open without being signed in
const isPublicRoute = createRouteMatcher(["/sign-in(.*)", "/sign-up(.*)"]);

export default clerkMiddleware((auth, request) => {
  // Every other route requires a signed-in user.
  // Signed-out visitors are sent to NEXT_PUBLIC_CLERK_SIGN_IN_URL (/sign-in).
  if (!isPublicRoute(request)) {
    auth().protect();
  }
});

export const config = {
  matcher: [
    // Run on every page, but skip Next.js internals and static files
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
