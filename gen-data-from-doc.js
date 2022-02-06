const file = require("fs")
    .readFileSync(__dirname + "/data.txt")
    .toString()
    .split("\n");

let out = {
    instructions: {},
    registers: null,
};

for (let i = 0; i < file.length; i += 4) {
    out.instructions[file[i + 1]] = {
        "Oracle Solaris Mnemonic": file[i],
        "Intel/AMD Mnemonic": file[i + 1],
        Description: file[i + 2],
        Reference: file[i + 3],
    };
}

require("node:readline/promises")
    .createInterface({ input: process.stdin, output: process.stdout })
    .question("File name: ")
    .then((res) => {
        require("fs").writeFileSync(__dirname + `/${res}.json`, JSON.stringify(out));
        process.exit(0);
    });
