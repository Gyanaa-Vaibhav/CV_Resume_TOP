export default function useFromFilter(x) {
    
    if (typeof x == 'string') {
        const value = x.replaceAll(" ", "").toLowerCase();
        return (
            <label
                key={value}
                htmlFor={value}>
                {x}
                <br />
                <input
                    type="text"
                    name={value}
                    id={value}
                    // required
                />
            </label>
        )
    } else if (typeof x === 'object') {

        // Checks for Optional Placeholder and Description Tags
        const value = x[0].replaceAll(" ", "").toLowerCase();
        return (
            <label
                key={value}
                htmlFor={value}>{x[0]}
                <span
                    className="optional">&nbsp;{x[1]}
                </span>
                <br />

                {value != 'description' ?
                    <input
                        type={value}
                        name={value}
                        id={value}
                        
                    />
                    :
                    <textarea
                        type={value}
                        name={value}
                        id={value}
                        // required
                    />
                }
            </label>
        )
    }
}