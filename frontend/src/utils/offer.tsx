import { useState } from "react";
import { Range, getTrackBackground } from "react-range";

const STEP = 1;
const MIN = 0;
const MAX = 500;

interface PriceFilterProps {
    onPriceChange: (min: number, max: number) => void;
}

export function PriceFilter({ onPriceChange }: PriceFilterProps) {
    const [values, setValues] = useState([0, 500]);

    return (
        <>
            <p style={{ fontWeight: 400 , fontSize: 15, marginLeft: 20, color: "#D1D5DB"}}>
                R$ {values[0]} - R$ {values[1]}
            </p>
            <Range
                values={values}
                step={STEP}
                min={MIN}
                max={MAX}
                onChange={(newValues) => setValues(newValues)}
                onFinalChange={(newValues) => onPriceChange(newValues[0], newValues[1])}
                renderTrack={({ props, children }) => {
                    const { key, ...restProps } = props;
                    return (
                        <div
                            key={key}
                            {...restProps}
                            style={{
                                ...props.style,
                                height: "6px",
                                width: "88%",
                                borderRadius: "999px",
                                margin: "20px",
                                background: getTrackBackground({
                                    values,
                                    colors: ["#2D3243", "#8B5CF6", "#2D3243"],
                                    min: MIN,
                                    max: MAX
                                })
                            }}
                        >
                            {children}
                        </div>
                    );
                }}
                renderThumb={({ props }) => {
                    const { key, ...restProps } = props;
                    return (
                        <div
                            key={key}
                            {...restProps}
                            style={{
                                ...props.style,
                                height: "20px",
                                width: "20px",
                                borderRadius: "50%",
                                backgroundColor: "#8B5CF6"
                            }}
                        />
                    );
                }}
            />
        </>
    );
}