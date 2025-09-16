// Performance monitoring script
const fs = require('fs');
const path = require('path');

// Performance tracking
const startTime = Date.now();

// Monitor file system operations
const originalReadFile = fs.readFileSync;
fs.readFileSync = function(...args) {
  const fileStart = Date.now();
  const result = originalReadFile.apply(this, args);
  const fileEnd = Date.now();
  
  if (fileEnd - fileStart > 10) { // Log files that take more than 10ms
    console.log(`Slow file read: ${args[0]} took ${fileEnd - fileStart}ms`);
  }
  
  return result;
};

// Monitor module loading
const originalRequire = require;
require = function(moduleName) {
  const moduleStart = Date.now();
  const result = originalRequire.apply(this, arguments);
  const moduleEnd = Date.now();
  
  if (moduleEnd - moduleStart > 50) { // Log modules that take more than 50ms
    console.log(`Slow module load: ${moduleName} took ${moduleEnd - moduleStart}ms`);
  }
  
  return result;
};

// Export performance data
module.exports = {
  getStartupTime: () => Date.now() - startTime,
  logPerformance: (message) => {
    console.log(`[PERF] ${message}: ${Date.now() - startTime}ms`);
  }
};
