import Navigation from "@/components/navigation/navigation";

export default function siteLayout({ children }) {
    return <div>
        <Navigation>
            {children}
        </Navigation>
    </div>
}