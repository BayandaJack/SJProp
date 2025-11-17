import PropDetailsForm from "../components/Forms/PropDetailsForm";

export default function AddProperty(){
    return (
        <>
            <h1>Add Properties!!!</h1>
            <section className="flex flex-row items-center justify-center">
                <div className="W-3/4 bg-gray-200">
                    <PropDetailsForm />
                </div>
            </section>
        </>
    );
}