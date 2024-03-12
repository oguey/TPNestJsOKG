import { DynamicModule , Module} from "@nestjs/common";
import { ConfigurationService } from "src/Configuration/configuration.service"; 
@Module({})
export class ConfigurationModule {



    static register(options: Record<string, string>): DynamicModule {
        return {
            module: ConfigurationModule,
            providers: [
                {
                    provide: ConfigurationService,
                    useValue: new ConfigurationService({
                        environment: 'production'
                    })
                },
                ConfigurationService
            ],
            exports: [ConfigurationService]
        };
    }
}