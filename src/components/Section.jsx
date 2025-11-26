export default function Section({ title, subtitle }) {
return (
<section className="py-16 text-center">
<h2 className="text-3xl font-bold mb-2">{title}</h2>
<p className="text-gray-600 max-w-xl mx-auto">{subtitle}</p>
</section>
)
}