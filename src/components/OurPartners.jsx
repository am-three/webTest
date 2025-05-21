import { partners } from "../constants"
import './style.css'

const OurPartners = () => {

    return (

        <div className="mt-20">

            <h3 className="text-3xl text-center "> Our Partners </h3>

            <div className="mt-20 flex lg:ms-10 p-2 gap-10">
                {partners.map((partner, index) => (

                    <div key={index} className="w-full">
                        <img className="ptnerImg border rounded-t-xl opacity-80 bg-slate-400 w-28 p-1" src={partner.image} alt={partner.partner} />
                    </div>

                ))}
            </div>

        </div>

    )

}

export default OurPartners
