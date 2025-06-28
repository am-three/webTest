import { resourcesLinks, universitiesLinks, contactUsLinks } from "../constants"
import './style.css'

const Footer = () => {
    return (

        <footer className="mt-20 border-t-2 pt-10 border-neutral-700 px-5 w-full bg-slate-700">

            <div className="grid md:grid-cols-3 grid-cols-2 gap-4 justify-center">

                <div>
                    <h3 className="text-md font-semibold mb-4"> Resources </h3>
                    <ul className="space-y-2">
                        {resourcesLinks.map((link, index) => (

                            <li key={index}>
                                <a className="text-neutral-300 hover:text-white" href={link.href}>
                                    {link.text}
                                </a>
                            </li>

                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="text-md font-semibold mb-4"> Universities </h3>
                    <ul className="space-y-2">
                        {universitiesLinks.map((link, index) => (

                            <li key={index}>
                                <a className="text-neutral-300 hover:text-white" href={link.href}>
                                    {link.text}
                                </a>
                            </li>

                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="text-md font-semibold mb-4"> Contact Us </h3>
                    <ul className="space-y-2">
                        {contactUsLinks.map((link, index) => (

                            <li key={index}>
                                <a className="text-neutral-300 hover:text-white" href={link.href}>
                                    {link.text}
                                </a>
                            </li>

                        ))}
                    </ul>
                </div>

            </div>

            <div className="text-center mt-10 font-semibold">
                <p>
                    <span className="fooText  bg-clip-text text-transparent">
                        &copy; {new Date().getFullYear()} flashWeb &trade;
                    </span>

                    {/* bg-gradient-to-b from-slate-200 to-red-600 */}
                </p>
            </div>

        </footer>

    )
}

export default Footer
