export default function _default(type: any, length: any): {
    set(value: any, index: any): void;
    data: () => {
        type: any;
        length: any;
        buffers: any[];
        dict: import("apache-arrow").Vector<any> | import("apache-arrow").BaseVector<any>;
    };
};