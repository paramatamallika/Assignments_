# Database Fundamentals – Conceptual Understanding

## 1. Why is db.json not suitable as a database for real projects?

`db.json` is a **file-based storage system**, which is useful only for learning and small demo projects. It is **not suitable for real-world applications** due to several limitations.

### Limitations of file-based storage:

**Performance:**
In file-based storage, the entire file must be read and written every time data is accessed or modified. As data grows, this becomes slow and inefficient, leading to poor application performance.

**Scalability:**
File-based databases do not scale well. Handling large amounts of data or multiple users simultaneously becomes difficult because files are not designed to manage concurrent operations efficiently.

**Reliability:**
There is a high risk of data corruption if the server crashes while reading or writing the file. There is no built-in recovery mechanism, backup system, or transaction support.

Because of these issues, `db.json` is suitable only for learning purposes and not for production-level applications.

---

## 2. What are the ideal characteristics of a database system (apart from just storage)?

A database system does more than store data. An ideal database should have the following characteristics:

### Performance

The database should retrieve and update data quickly, even when handling large datasets. Indexing and optimized queries help improve performance.

### Concurrency

Multiple users should be able to read and write data at the same time without conflicts. Databases use locking and transaction mechanisms to handle concurrent access safely.

### Reliability

The database should ensure data is safe and consistent even during failures. Features like backups, logs, and recovery systems help maintain reliability.

### Data Integrity

The database must maintain accurate and consistent data. Constraints such as primary keys, foreign keys, and validations help prevent invalid data from being stored.

### Scalability

The database should be able to grow with the application, handling increasing data volume and user traffic without performance degradation.

### Fault Tolerance

The database should continue functioning even if part of the system fails. Replication and failover mechanisms help achieve fault tolerance.

---

## 3. How many types of databases are there? What are their use cases?

Databases are mainly classified into two major types:

### Relational Databases (SQL)

Relational databases store data in **tables with rows and columns** and follow a fixed schema. They use SQL (Structured Query Language) for data operations.

**Examples:** MySQL, PostgreSQL, Oracle, SQL Server

**Use Cases:**

* Banking and financial systems
* E-commerce applications
* Inventory management systems
* Applications requiring strong data consistency

These databases are ideal when data relationships are important and consistency is critical.

---

### Non-Relational Databases (NoSQL)

Non-relational databases store data in formats such as **documents, key-value pairs, graphs, or wide-column stores**. They are schema-less or flexible in structure.

**Examples:** MongoDB, Redis, Cassandra, Firebase

**Use Cases:**

* Social media platforms
* Real-time applications
* Big data and analytics
* Applications requiring high scalability and flexibility

NoSQL databases are best suited for applications with large, unstructured data and high traffic.

---

## Conclusion

While `db.json` is helpful for learning, real-world applications require robust database systems that provide performance, scalability, reliability, and data integrity. Choosing the right type of database depends on the application’s requirements and use case.
