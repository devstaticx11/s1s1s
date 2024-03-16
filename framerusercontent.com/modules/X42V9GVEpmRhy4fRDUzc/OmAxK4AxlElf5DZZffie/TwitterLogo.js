let Component;
var TwitterLogo_default = (React) => {
    if (!Component) {
        const renderPathForWeight = (weight, color, pathsByWeight2) => !!pathsByWeight2.get(weight) ? pathsByWeight2.get(weight)(color) : null;
        const pathsByWeight = new Map();
        pathsByWeight.set("bold", (color) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
            d: "M128,88c0-22,18.5-40.3,40.5-40a40,40,0,0,1,36.2,24H240l-32.3,32.3A127.9,127.9,0,0,1,80,224c-32,0-40-12-40-12s32-12,48-36c0,0-64-32-48-120,0,0,40,40,88,48Z",
            fill: "none",
            stroke: color,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "24"
        })));
        pathsByWeight.set("duotone", (color) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
            d: "M128,88c0-22,18.5-40.3,40.5-40a40,40,0,0,1,36.2,24H240l-32.3,32.3A127.9,127.9,0,0,1,80,224c-32,0-40-12-40-12s32-12,48-36c0,0-64-32-48-120,0,0,40,40,88,48Z",
            opacity: "0.2"
        }), /* @__PURE__ */ React.createElement("path", {
            d: "M128,88c0-22,18.5-40.3,40.5-40a40,40,0,0,1,36.2,24H240l-32.3,32.3A127.9,127.9,0,0,1,80,224c-32,0-40-12-40-12s32-12,48-36c0,0-64-32-48-120,0,0,40,40,88,48Z",
            fill: "none",
            stroke: color,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "16"
        })));
        pathsByWeight.set("fill", () => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
            d: "M245.7,77.7l-30.2,30.1C209.5,177.7,150.5,232,80,232c-14.5,0-26.5-2.3-35.6-6.8-7.3-3.7-10.3-7.6-11.1-8.8a8,8,0,0,1,3.9-11.9c.2-.1,23.8-9.1,39.1-26.4a108.6,108.6,0,0,1-24.7-24.4c-13.7-18.6-28.2-50.9-19.5-99.1a8.1,8.1,0,0,1,5.5-6.2,8,8,0,0,1,8.1,1.9c.3.4,33.6,33.2,74.3,43.8V88a48.3,48.3,0,0,1,48.6-48,48.2,48.2,0,0,1,41,24H240a8,8,0,0,1,7.4,4.9A8.4,8.4,0,0,1,245.7,77.7Z"
        })));
        pathsByWeight.set("light", (color) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
            d: "M128,88c0-22,18.5-40.3,40.5-40a40,40,0,0,1,36.2,24H240l-32.3,32.3A127.9,127.9,0,0,1,80,224c-32,0-40-12-40-12s32-12,48-36c0,0-64-32-48-120,0,0,40,40,88,48Z",
            fill: "none",
            stroke: color,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "12"
        })));
        pathsByWeight.set("thin", (color) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
            d: "M128,88c0-22,18.5-40.3,40.5-40a40,40,0,0,1,36.2,24H240l-32.3,32.3A127.9,127.9,0,0,1,80,224c-32,0-40-12-40-12s32-12,48-36c0,0-64-32-48-120,0,0,40,40,88,48Z",
            fill: "none",
            stroke: color,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "8"
        })));
        pathsByWeight.set("regular", (color) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
            d: "M128,88c0-22,18.5-40.3,40.5-40a40,40,0,0,1,36.2,24H240l-32.3,32.3A127.9,127.9,0,0,1,80,224c-32,0-40-12-40-12s32-12,48-36c0,0-64-32-48-120,0,0,40,40,88,48Z",
            fill: "none",
            stroke: color,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "16"
        })));
        const renderPath = (weight, color) => renderPathForWeight(weight, color, pathsByWeight);
        const TwitterLogo = React.forwardRef((props, ref) => /* @__PURE__ */ React.createElement("g", {
            ref,
            ...props
        }, renderPath(props.weight, props.color)));
        TwitterLogo.displayName = "TwitterLogo";
        Component = TwitterLogo;
    }
    return Component;
};
const __FramerMetadata__ = {
    exports: {
        default: {
            type: "reactComponent",
            slots: [],
            annotations: {
                framerContractVersion: "1"
            }
        },
        __FramerMetadata__: {
            type: "variable"
        }
    }
};
export {
    __FramerMetadata__,
    TwitterLogo_default as
    default
};