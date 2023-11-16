export interface INotificationState {
    body: string;
    status: "success" | "error" | "warning" | "info"| "default" | undefined;
}