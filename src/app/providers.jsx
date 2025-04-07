"use client";

import { AuthProvider } from "@/context/AuthContext";

export function Providers({ children }) {
  return <AuthProvider>{children}</AuthProvider>;
}
// This component wraps the entire application with the AuthProvider context,
// allowing any child component to access authentication-related data and functions.
// It uses the `use client` directive to indicate that it should be rendered on the client side.
// The `children` prop represents the nested components that will be wrapped by the provider.
// This is useful for managing user authentication state throughout the app.
// The `AuthProvider` component is imported from the `context/AuthContext` file,
// which contains the logic for managing authentication state, including login and logout functions.
// By wrapping the application with this provider, any component can access the authentication context,
// making it easier to manage user sessions and access control.