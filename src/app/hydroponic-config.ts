export interface HydroponicConfig {
    device: string;
    wifi_ssid: string;
    wifi_password: string;
    ntp_server: string;
    hostname: string;
    moisture_air_value: number;
    moisture_water_value: number;
}
