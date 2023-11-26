var mem = require('memoryjs');
 
var procName = "Minecraft.Windows.exe";

// Get minecraft process
let mcProcess = mem.openProcess(procName)
module.exports.mcProcess = mcProcess;

/**
 * Reads memory at the given address
 * @param {number} address memory address
 * @param {String} type type of data to read, ex "int", "float", "string"
 */
function read(address, type) {
  return memoryjs.readMemory(address,  type);
}
module.exports.read = read;

/**
 * Write data to the given memory address
 * @param {number} address address of memory to write to
 * @param {*} data the data to write
 * @param {String} type the type of the data
 */
function write(address, data, type) {
  memoryjs.writeMemory(address, data, type);
}
module.exports.write = write;