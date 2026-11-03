import { ReactNode } from "react"

interface SocialButtonProps {
    href: string;
    icon: React.ReactNode;
    label: string;
    // We'll pass the base color (e.g., 'text-blue-600') 
    // and a hover background (e.g., 'hover:bg-blue-600')
    brandClass: string; 
    hoverBgClass: string;
}

export default function SocialButton({href, icon, label, hoverBgClass, brandClass = "hover:text-blue-600" }: SocialButtonProps){
    return(
        <a href={href}
           target="_blank"
           rel="noopener noreferrer"
           className={`flex items-center gap-3 px-6 py-3 border border-gray-200 rounded-xl bg-white shadow-sm transition-all 
           hover:shadow-md hover:-translate-y-1 hover:text-white group ${hoverBgClass}`}>
            
            {/* Icon starts with the brand color, turns white on hover */}
            <span className={`text-2xl transition-all group-hover:scale-110 group-hover:text-white ${brandClass}`}>
                {icon}
            </span>

            {/* Label starts dark, turns white on hover */}
            <span className="font-medium text-gray-700 transition-colors group-hover:text-white">
                {label}
            </span>
        </a>
    );
}