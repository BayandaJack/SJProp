export default function PromiseCard({ title, text }){
    return (
        <div className="flex flex-col gap-3 rounded-md border border-gray-400 p-3 w-full">
            <h2><b>{title}</b></h2>
            <p>{text}</p>
        </div>
    );
}