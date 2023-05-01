# Selenium Java Example

## Using TestNG

To start this sample using TestNG, run the following command:

```
$ mvn test
```

## Standalone Using No Test Framework

To run it standalone, without TestNG, run the following command:

```
$ mvn -e exec:java -Dexec.classpathScope="test" -Dexec.mainClass="RemoteDemo" -Dexec.cleanupDaemonThreads=false 
```

## Resources

- https://stackoverflow.com/q/30839272/552792

