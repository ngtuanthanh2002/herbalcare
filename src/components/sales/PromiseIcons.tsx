type IconProps = {
  className?: string;
};

export function IconPackage({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M21 8.5v7.2a2 2 0 0 1-1 1.73l-7 4.05a2 2 0 0 1-2 0l-7-4.05a2 2 0 0 1-1-1.73V8.5a2 2 0 0 1 1-1.73l7-4.05a2 2 0 0 1 2 0l7 4.05a2 2 0 0 1 1 1.73z" />
      <path d="M3.3 7.2 12 12.1l8.7-4.9" />
      <path d="M12 12.1V22" />
      <path d="m7.5 4.2 9 5.2" />
    </svg>
  );
}

export function IconTruck({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M1 7h12v10H1z" />
      <path d="M13 10h4l3 3v4h-7V10z" />
      <circle cx="5.5" cy="18.5" r="1.8" />
      <circle cx="17.5" cy="18.5" r="1.8" />
      <path d="M7.3 18.5h8.2" />
    </svg>
  );
}

export function IconExchange({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M16 3h5v5" />
      <path d="M21 3 12 12" />
      <path d="M8 21H3v-5" />
      <path d="M3 21 12 12" />
      <path d="M21 16v2a3 3 0 0 1-3 3h-2" />
      <path d="M3 8V6a3 3 0 0 1 3-3h2" />
    </svg>
  );
}

export function IconWarranty({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M12 2.5 19.5 6v5.2c0 4.7-3.1 8.9-7.5 10.3C7.6 20.1 4.5 15.9 4.5 11.2V6L12 2.5z" />
      <path d="m8.8 12 2.1 2.1 4.3-4.4" />
    </svg>
  );
}
