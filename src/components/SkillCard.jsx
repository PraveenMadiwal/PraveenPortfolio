/**
 * @copyright 2025 praveenmadiwal
 * @license Apache-2.0
 */
/**
 * node modules
 */
 
import PropTypes from "prop-types";


const SkillCard = ({
    imgSrc,
    label,
    desc,
    PageLink,
    classes
}) => {
  return (
        <div className={'flex items-center gap-3 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-3 hover:bg-zinc-800 transition-colors group '+ classes}>
           <a href={PageLink} target="_blank" className=""> <figure className="bg-zinc-700/50 rounded-lg 
            overflow-hidden w-12 h-12 p-2 group-hover:bg-zinc-900">
                <img src={imgSrc}
                     width={32}
                     height={32} 
                     alt={label} 
                     className="" />
            </figure></a>
            <div>
                <h3>{label}</h3>

                <p className="text-zinc-400 text-sm">{desc}</p>
            </div>
        </div>
  )
}

SkillCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    PageLink:PropTypes.string.isRequired,
    classes: PropTypes.string
}

export default SkillCard