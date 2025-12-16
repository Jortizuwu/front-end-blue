export const AUTH_FIELDS = {
  login: [
    {
      name: "username",
      label: "Nombre de usuario",
      placeholder: "Ingresa tu nombre de usuario",
      type: "text",
      autoComplete: "username",
    },
    {
      name: "password",
      label: "Contraseña",
      placeholder: "******",
      type: "password",
      autoComplete: "current-password",
    },
  ],
  register: [
    {
      name: "username",
      label: "Nombre de usuario",
      placeholder: "Ingresa tu nombre de usuario",
      type: "text",
      autoComplete: "username",
    },
    {
      name: "password",
      label: "Contraseña",
      placeholder: "******",
      type: "password",
      autoComplete: "new-password",
    },
    {
      name: "confirmPassword",
      label: "Confirmar contraseña",
      placeholder: "Confirma tu contraseña",
      type: "password",
      autoComplete: "new-password",
    },
  ],
} as const;
