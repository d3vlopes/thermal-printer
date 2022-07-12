import ThermalPrinter from 'node-thermal-printer'
import PrinterTypes from 'node-thermal-printer'

const ip = 'xxx.xxx.xxx.xxx'

let printer = new ThermalPrinter.printer({
  type: PrinterTypes.types.EPSON,
  interface: `tcp://${ip}`,
});

printer.alignCenter();
printer.println("Hello world");
await printer.printImage('./assets/olaii-logo-black.png')
printer.cut();

try {
  let execute = printer.execute()
  console.log('Printer Execute =>', execute)
  console.log("Print done!");
} catch (error) {
  console.log("Print failed:", error);
}