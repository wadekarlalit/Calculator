function Button({ children, ...props}) {
    return React.createElement("button", props, children)
}

function TD({ children, ...props}) {
    return React.createElement("td", props, children)
}

function Select(props) {
    return React.createElement(
        "select",
        props,
        [
            React.createElement(Option, { value: "progress" }, "Progress"),
            React.createElement(Option, { value: "todo" }, "Todo"),
            React.createElement(Option, { value: "done" }, "Done"),
        ]
    );
}

function Option({ children, ...props}) {
    return React.createElement("option", props, children)
}

function TR({ children, ...props }) {
    return React.createElement(
        "tr",
        props,
        [
            React.createElement(TD, {}, props.index),
            React.createElement(TD, {}, props.title),
            React.createElement(TD, {}, React.createElement(Select, props)),
            React.createElement(TD, {}, [
                React.createElement(
                    Button,
                    { className: "btn btn-sm btn-outline-warning" },
                    "Edit"
                ),
                React.createElement(
                    Button,
                    {
                        className: "btn btn-sm btn-outline-danger",
                        onClick: () => props.deleteItem(props.index - 1),
                    },
                    "Delete"
                ),
            ]),
        ]
    );
}


export  function App() {
    const [value, setValue] = React.useState("");
    const [items, setItems] = React.useState([]);

    function add(params) {
        const itemTemp = [
            ...items,
            {title: value, id: Date.now(), status: "todo"},
        ];
        setItems(itemTemp)
    };

    function deleteItem(index) {
        const temp = items.filter((_, idx) => index !== idx);
        setItems(temp)
    }

    return React.createElement(
        "div",
        {
            className: "container pt-4",
        },
        [   
            // form...
            React.createElement(
                "form",
                {
                    onSubmit: (e)=> {
                        e.preventDefault();
                        add();
                        setValue("")
                    },
                    key: "form-container"
                },
                React.createElement(
                    "div",
                    {
                        className: "input-group mb-3",
                        key: "input-container"
                    },
                    [
                        React.createElement("input", {
                            value: value, // <-- Ensure input reflects state
                            onChange: (ev) => setValue(ev.target.value), // <-- Correct state update
                            type: "text",
                            className: "form-control",
                            placeholder: "Enter todo item...",
                            "aria-label": "TODO title",
                            "aria-describedby": "button-add",
                            id: "todoInput",
                            required: true,
                            key: "todoInput",
                        }),

                        React.createElement(
                            "button",
                            {
                                className: "btn btn-outline-primary",
                                type: "submit",
                                id: "button-add",
                                key: "button-add",
                            },
                            "Add item"
                        )
                    ]
                )
            ),

            // table...
            React.createElement(
                "table",
                {
                    className: "table",
                    key: "table",
                },
                [
                    // table heading...
                    React.createElement(
                        "thead",
                        {
                            key: "thead"
                        },
                        ["#", "Task Name", "Status", "Actions"].map((item)=> 
                            React.createElement("th", {key: item}, item)
                        )
                        // [
                        //     React.createElement("th", {key: "#"}, "#"),
                        //     React.createElement("th", {key: "task Name"}, "Task Name"),
                        //     React.createElement("th", {key: "status"}, "Status"),
                        //     React.createElement("th", {key: "actions"}, "Actions"),
                        // ]
                    ),

                    // table deta...
                    React.createElement(
                        "tbody",
                        { key: "tbody" },
                        items.map((item, index) =>
                            React.createElement(TR, {
                                key: item.id,
                                index: index + 1,
                                title: item.title,
                                deleteItem,
                            })
                        )
                    )
                ]
            )
        ]
    )
}