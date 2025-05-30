export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-sm">
          &copy; {new Date().getFullYear()} Ricardo Lascano. Todos los derechos
          reservados.
        </div>
        <div className="space-x-4">
          <a
            href="https://github.com/ralascano"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ricardo-lascano-gonzalez-7649411b1/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400"
          >
            LinkedIn
          </a>
          <a
            href="mailto:ralascanog@gmail.com"
            className="hover:text-purple-400"
          >
            Correo
          </a>
          <a
            href="https://wa.me/593984849691"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
