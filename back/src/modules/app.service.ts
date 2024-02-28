import { Injectable } from '@nestjs/common';
import { EstadosService } from './modules/estados/estados.service';

@Injectable()
export class AppService {
  constructor(protected estadosService: EstadosService) {}
  async run() {
    this.estadosService.create();
  }
}
