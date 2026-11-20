/*
Implement the Data Sanitizer Sweep Process
In this lab, you will clean semi-structured log files by replacing disallowed characters with # and tracking how many entries were processed.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should use a function declaration to create a function named sanitizeLog with two parameters: entry, a string representing a log entry, and disallowedCharacters, an array of single-character strings representing the characters to replace.
The function should return a modified entry string with each disallowed character replaced with #. Matching should be case-sensitive. For example, if disallowed characters are ["e", "E", "o", "r"], then DEBUG: Server started on port 3000 returns D#BUG: S##v## sta#t#d #n p##t 3000.
You should create a function named cleanLogs with two parameters: logs, an array of strings representing log entries, and disallowedCharacters, an array of single-character strings representing the characters to replace.
cleanLogs should iterate over the given array of log entries in order.
When cleanLogs reaches a log entry that contains the fatal marker $, it should stop and return Sanitizing stopped. Failure Reason: Fatal character occurred.
A log entry starting with the / character is an informational entry and should not be sanitized. You should keep a count of informational entries.
All other log entries should be sanitized using the sanitizeLog function. You should keep a count of sanitized entries.
If cleanLogs finishes without encountering a fatal marker, it should return Total Entry Count: X. Sanitized Entry Count: Y. Informational Entry Count: Z. Finished sanitizing logs., where X is the total number of entries, Y is the number of sanitized entries, and Z is the number of informational entries.
The following log arrays are used in the tests:

let logs_1 = [
  "INFO: Server started on port 3000",
  "DEBUG: user=admin token=abc123 connected",
  "WARN: High memory usage detected at 87%"
];

let logs_2 = [
  "FATAL: System overload detected, shutting down",
  "DEBUG: token=def456$ refreshed for session",
  "ERROR: Null pointer exception in module auth"
];

let logs_3 = [
  "ERROR: Failed to connect to db, retry=3",
  "DEBUG: api_key=XYZ789 used in request",
  "/INFO: Cache cleared successfully",
  "WARN: Disk usage at 92%, threshold=90%",
  "/INFO: Disk usage stabilized"
];
*/
