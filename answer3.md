### 1. What schema design is and what a database schema represents

A **database schema** is the blueprint of a database. It defines:

* Tables
* Columns and their data types
* Relationships between tables
* Constraints and rules (like primary keys, foreign keys, uniqueness)

Schema design is about deciding **what data to store and how to store it correctly**.
For example, in an e-commerce system, schema design decides that there should be separate tables for `users`, `orders`, and `products`, and how these tables are connected.

---

### 2. Why schema design is required before writing backend code

Schema design should come **before backend development** because:

* Backend code depends on how data is structured
* APIs, queries, and business logic rely on table relationships
* A well-designed schema prevents frequent database changes later

If schema design is done after writing code, developers may need to rewrite queries, APIs, and logic repeatedly, which wastes time and increases bugs.

---

### 3. How poor schema design impacts data consistency, maintenance, and scalability

Poor schema design can cause serious problems:

* **Data inconsistency**: Same data stored in multiple places may not match (e.g., different phone numbers for the same user).
* **Difficult maintenance**: Updating or fixing data becomes complex and error-prone.
* **Scalability issues**: As data grows, poorly designed tables lead to slow queries and performance issues.

For example, storing user details inside every order record will cause duplication and inconsistency when user information changes.

---

### 4. What validations are in schema design and why databases enforce them

**Validations (constraints)** are rules applied to columns to ensure correct and reliable data. Common examples include:

* **NOT NULL**: Ensures a value must be provided (e.g., username cannot be empty).
* **UNIQUE**: Prevents duplicate values (e.g., email should be unique).
* **DEFAULT**: Assigns a value if none is provided (e.g., status = 'active').
* **PRIMARY KEY**: Uniquely identifies each record in a table.

Databases enforce validations to **maintain data integrity** and prevent invalid or incomplete data from being stored.

---

### 5. Difference between a database schema and a database table

* A **database schema** is the overall structure or design of the database.
* A **table** is a single component within the schema that stores data about one entity.

In simple terms:

> Schema = entire plan
> Table = one section of that plan

---

### 6. Why a table should represent only one entity

Each table should represent **one real-world entity** to keep data organized and normalized.
For example:

* A `users` table should store only user-related data.
* An `orders` table should store only order-related data.

Mixing multiple entities in one table leads to confusion, duplication, and complex queries.

---

### 7. Why redundant or derived data should be avoided in table design

**Redundant data** means storing the same information multiple times, and **derived data** means storing values that can be calculated from other columns.

Problems caused by this:

* Increased storage usage
* Data inconsistency during updates
* More complex maintenance

Example:
Instead of storing `total_price` and recalculating it incorrectly, it is better to calculate it from `quantity × price` when needed.

---

### 8. Importance of choosing correct data types while designing tables

Choosing correct data types:

* Improves performance
* Reduces storage usage
* Prevents invalid data

Examples:

* Use `INT` for numeric IDs, not `TEXT`
* Use `DATE` for dates instead of strings
* Use `BOOLEAN` for true/false values

Correct data types help the database enforce rules and optimize queries efficiently.

---

### **Conclusion**

Schema design is a critical foundation of relational databases. A well-designed schema ensures data consistency, reduces errors, improves performance, and makes applications easier to maintain and scale. Designing the schema carefully before writing backend code saves time, prevents bugs, and leads to a reliable database system.
