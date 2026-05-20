import "..//Style/StepIndicator.css"
export default function StepIndicator({ step }) {

    return (
        <div className="step-container">

            <div className={step >= 1 ? "circle active" : "circle"}>
                1
            </div>

            <div className={step >= 2 ? "circle active" : "circle"}>
                2
            </div>

            <div className={step >= 3 ? "circle active" : "circle"}>
                3
            </div>

        </div>
    );
}