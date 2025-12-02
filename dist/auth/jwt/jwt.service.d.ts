declare const JwtService_base: new (...args: any) => any;
export declare class JwtService extends JwtService_base {
    constructor();
    validate(payload: any): Promise<any>;
}
export {};
