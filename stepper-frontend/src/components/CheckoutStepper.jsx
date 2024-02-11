import { useEffect, useRef, useState } from "react";

// eslint-disable-next-line react/prop-types
const CheckoutStepper = ({ stepsConfig = [] }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  const [margins, setMargins] = useState({
    marginLeft :0,
    marginRight : 0
  })
  
  const stepRef = useRef([])

  if (!stepsConfig.length) return <></>;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    setMargins({
        marginLeft: stepRef.current[0].offsetWidth/2,
        marginRight: stepRef.current[stepsConfig.length - 1].offsetWidth/2,
    })
  }, [stepRef])

  const handleNext = () => {
    setCurrentStep(prev => {
        if (prev === stepsConfig.length) {
          setIsComplete(true);
          return prev;
        } else {
          return prev + 1;
        }
    })
  };

  const calcProgressBar = () => {
    return  ((currentStep - 1) / (stepsConfig.length-1)) * 100;
  }

  const ActiveComponent = stepsConfig[currentStep -  1]?.Component;

  return (
    <>
      <div className="stepper">
        {stepsConfig.map((step, i) => {
          return (
            <div
              ref={el => stepRef.current[i] = el}
              key={step.name}
              className={`step ${
                currentStep > i + 1 || isComplete ? "complete" : ""
              } ${currentStep === i + 1 && !isComplete ? "active" : ""}`}
            >
              {/* If the step isn't complete and it's not the active one, don't show a checkmark */}

              <div className="step-number">
                {currentStep > i + 1 || isComplete ? (
                  <span>&#10003;</span>
                ) : (
                  i + 1
                )}
              </div>
              <div className="step-name">{step.name}</div>
            </div>
          );
        })}
      </div>
      {/* progress bar */}
      <div className="progress-bar" style={{
        width: `calc(100% - ${margins.marginLeft + margins.marginRight}px)`,
      }}>
        <div className="progress" style={{width:`${calcProgressBar()}%`}}>
            
        </div>
      </div>

        <ActiveComponent/>

      {!isComplete && (
        <button className="btn" onClick={handleNext}>
          {currentStep === stepsConfig.length ? "FINISH" : "NEXT"}
        </button>
      )}
    </>
  );
};

export default CheckoutStepper;
