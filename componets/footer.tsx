import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral text-neutral-content py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 text-center">
        {/* SOCIAL (FIRST) */}
        <div className="flex flex-col items-center gap-3">
          <p className="footer-title">Social</p>
          <div className="flex gap-4">
            <a
              href="https://twitter.com/iaabo5291"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-200"
              aria-hidden="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>

            <a
              className="hover:scale-110 transition-transform duration-200"
              href="https://www.youtube.com/@iaabo5291"
              target="_blank"
              rel="noopener noreferrer"
              aria-hidden="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </a>

            <a
              href="https://www.facebook.com/people/International-Association-of-Approved-Basketball-Officials/100057112074058/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-200"
              aria-hidden="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="hidden md:block w-px h-20 bg-neutral-content/30"></div>
        {/* LOGO (SECOND / CENTER) */}
        <div className="flex items-center gap-4">
          <img
            src="/iaaboLogoWhite.png"
            alt="IAABO Logo"
            width={120}
            height={120}
            draggable={false}
          />
          <p className="text-left text-lg leading-tight">
            <span className="font-semibold">IAABO BOARD 31</span>
            <br />
            Springfield, MA
          </p>
        </div>
        <div className="hidden md:block w-px h-20 bg-neutral-content/30"></div>
        {/* LINKS (THIRD) */}
        <div className="text-sm">
          <p>
            Visit IAABO{" "}
            <a
              href="https://www.iaabo.org"
              target="_blank"
              className="underline hover:text-white"
            >
              here
            </a>
          </p>
          <p className="mt-2">
            ArbiterSports{" "}
            <a
              href="https://go.arbitersports.com/arbitersportsb2c.onmicrosoft.com/B2C_1A_DefaultV1_Signin/api/SelfAsserted/confirmed?csrf_token=NHFHcXI1cmV4STRsWXMyaVlJU1FKR3ZzYkkwVHhvaUF2TW1vV1FmQVZmSUE5R3FYSXErSEJISmFkZ0lEWVZScVdSM1JFdW0wL3paVXc5YkRkTmxlS2c9PTsyMDI2LTAzLTI0VDIyOjM1OjQwLjUwNzg0NDVaO05qZ2lLSVNRZlgwVEN6YzdXK0QxZ1E9PTt7IlRhcmdldEVudGl0eSI6Ik1GQVVzZXJBZ2VudCIsIk9yY2hlc3RyYXRpb25TdGVwIjoxfQ==&tx=StateProperties=eyJUSUQiOiI2MTk4Yzg0Mi05MjJjLTQ4M2MtOGY3OS00YTlkZDZjMWFlZDUifQ&p=B2C_1A_DefaultV1_Signin&diags=%7B%22pageViewId%22%3A%22be071945-8437-4b84-af16-a35a67055b92%22%2C%22pageId%22%3A%22SelfAsserted%22%2C%22trace%22%3A%5B%7B%22ac%22%3A%22T005%22%2C%22acST%22%3A1774391742%2C%22acD%22%3A4%7D%2C%7B%22ac%22%3A%22T021%20-%20URL%3Ahttps%3A%2F%2Fassets.arbitersports.com%2Fb2c%2FDefaultV1%2FselfAsserted.html%22%2C%22acST%22%3A1774391742%2C%22acD%22%3A10%7D%2C%7B%22ac%22%3A%22T019%22%2C%22acST%22%3A1774391742%2C%22acD%22%3A6%7D%2C%7B%22ac%22%3A%22T004%22%2C%22acST%22%3A1774391742%2C%22acD%22%3A1%7D%2C%7B%22ac%22%3A%22T003%22%2C%22acST%22%3A1774391742%2C%22acD%22%3A1%7D%2C%7B%22ac%22%3A%22T017T010%22%2C%22acST%22%3A1774391742%2C%22acD%22%3A148%7D%2C%7B%22ac%22%3A%22T002%22%2C%22acST%22%3A1774391742%2C%22acD%22%3A0%7D%2C%7B%22ac%22%3A%22T017T010%22%2C%22acST%22%3A1774391742%2C%22acD%22%3A148%7D%5D%7D"
              target="_blank"
              className="underline hover:text-white"
            >
            here
            </a>
          </p>
        </div>
      </div>

      <div className="pt-10 text-center text-sm text-gray-600">
        &copy; {new Date().getFullYear()} IAABO Board 31 · All rights reserved
      </div>
    </footer>
  );
}
