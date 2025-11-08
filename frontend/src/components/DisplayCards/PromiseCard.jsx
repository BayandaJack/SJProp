export default function PromiseCard({ title, text, img }){
    return (
        <div className="flex flex-col justify-center items-center gap-3 rounded-md border border-gray-400 p-3 w-full">
            <h2><b>{title}</b></h2>
            <img className="max-w-[50%]" src={img} />
            <p>{text}</p>
        </div>
    );
}