# jmeter-to-k6

Converts [JMeter](https://jmeter.apache.org/index.html) .jmx files to [k6 script](https://docs.k6.io/docs) code.

The transformer converts JMeter [components](http://jmeter.apache.org/usermanual/component_reference.html) into corresponding requests and variables.

## Installation and usage

As npm global package:

```bash
npm install -g jmeter-to-k6
jmeter-to-k6 jmeter-test.jmx -o k6-script.js
k6 run k6-script.js
```

As local repository:

```bash
git clone git@github.com:loadimpact/jmeter-to-k6.git
cd jmeter-to-k6
npm install

#On macOS, Linux, or OpenBSD
bin/jmeter-to-k6.js examples/jmeter/v2/echo.json -o k6-script.js

#On windows
node bin/jmeter-to-loadimpact.js examples/jmeter/v2/echo.json

k6 run k6-script.js
```



## Options

The transformer provides a command line interface with different options.

      Usage: jmeter-to-k6 <filePath> [options]
    
      Convert a Postman collection to k6 script
    
      Options:
    
        -h, --help                    output usage information
        -V, --version                 output the version number
        -j --input-version <version>  Input version. Options `2.0.0` or `1.0.0`. Default `2.0.0`.
        -o --output <path>            Target file path where the converted collection will be written. Default `console`

## Examples

A collection of Postman examples are located under `./examples/jmeter`.

The k6 script will be auto-generated when running:

    $ jmeter-to-k6 examples/jmeter/v2/echo.json - o k6-script.js

Please, use the [issue tracker](https://github.com/loadimpact/jmeter-to-k6/issues) to open a discussion or bug report.

## Credits

Thanks to [borjacampina](https://github.com/borjacampina) for creating this tool.
