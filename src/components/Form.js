import {useState} from "react";

export default function Form({ onAddItems }) {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(e);
        // SyntheticBaseEvent {_reactName: 'onSubmit', _targetInst: null, type: 'submit', nativeEvent: SubmitEvent, target: form.add-form, ...}

        if (!description) return;

        const newItem = { description, quantity, packed: false, id: Date.now() };
        console.log(newItem);
        // {description: 'shirts', quantity: 10, packed: false, id: 1712506263662}

        onAddItems(newItem);

        // Reset
        setDescription("");
        setQuantity(1);
    }

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for your trip?</h3>
            <select
                value={quantity}
                onChange={e => setQuantity(Number(e.target.value))}
            >
                {Array.from({ length: 20 }, (_, i) => i + 1)
                    .map((num) => (
                        <option value={num} key={num}>
                            {num}
                        </option>
                    ))}
                { /*
            Array.from({ length: 20 }, (_, i) => i + 1)
            (20) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
            */
                }
                { /*
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            */
                }
            </select>
            <input
                type="text"
                placeholder="Item..."
                value={description}
                onChange={(e) => {
                    console.log(e.target.value);
                    /* t
                       te
                       tes
                       test
                    */
                    setDescription(e.target.value)
                }}
            />
            <button>Add</button>
        </form>
    )
}