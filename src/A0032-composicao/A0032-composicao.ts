export class Carro {
  private readonly motor: Motor = new Motor();
  ligar(): void {
    this.motor.ligar();
  }
  acelerar(): void {
    this.motor.acelerar();
  }
  parar(): void {
    this.motor.parar();
  }
  desligar(): void {
    this.motor.desligar();
  }
}

export class Motor {
  ligar(): void {
    console.log('Motor esta ligado...');
  }
  acelerar(): void {
    console.log('Motor esta acelerando...');
  }
  parar(): void {
    console.log('Motor esta parado...');
  }
  desligar(): void {
    console.log('Motor esta desligado...');
  }
}

const carro = new Carro();
carro.ligar();
carro.acelerar();
carro.parar();
carro.desligar();
