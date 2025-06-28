#!/bin/bash
echo "Running Exercise 1: LoggingExample"
mvn exec:java -Dexec.mainClass="com.example.logging.LoggingExample"
echo

echo "Running Exercise 2: ParameterizedLogging"
mvn exec:java -Dexec.mainClass="com.example.logging.ParameterizedLogging"
echo

echo "Running Exercise 3: AppenderExample"
mvn exec:java -Dexec.mainClass="com.example.logging.AppenderExample"