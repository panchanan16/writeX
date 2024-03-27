import CategoryContent from "@/components/ui/categoryUI/categoryContent"
import CategoryHeader from "@/components/ui/categoryUI/CategoryHeader"


export default function CategoryPage() {
    return (
        <section style={{ padding: 3, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <CategoryHeader />
            <CategoryContent />
        </section>
    )
}