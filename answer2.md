# Database Relationships

## 1. Definition of Database Relationship

A **database relationship** defines how tables in a relational database are connected to each other using **primary keys (PK)** and **foreign keys (FK)**. Relationships help maintain **data integrity**, **reduce redundancy**, and enable efficient data retrieval across related tables.

In simple terms:

> A database relationship explains **how one table’s data is related to another table’s data**.

In an **e-commerce application**, relationships are essential to connect customers, orders, products, payments, and deliveries.

---

## 2. Types of Database Relationships

There are **three main types** of database relationships:

1. One-to-One (1:1)
2. One-to-Many (1:N)
3. Many-to-Many (M:N)

Each type is explained below with **clear e-commerce examples and diagrams**.

---

## 3. One-to-One Relationship (1:1)

### Definition

A **one-to-one relationship** exists when **one record in Table A is linked to exactly one record in Table B**, and vice versa.

### E-commerce Example

**Users ↔ User Profiles**

* One user has one profile
* One profile belongs to one user

### Example Tables

* `users(user_id, email, password)`
* `user_profiles(profile_id, user_id, address, phone)`

Here, `user_profiles.user_id` is a **foreign key** referencing `users.user_id`.

### Diagram

```
Users                User_Profiles
-----                -------------
user_id (PK)  ───▶   user_id (FK)
email                address
password             phone
```

### Usage in E-commerce

* Storing additional user details separately
* Improving security and normalization

---

## 4. One-to-Many Relationship (1:N)

### Definition

A **one-to-many relationship** exists when **one record in Table A can be related to multiple records in Table B**, but each record in Table B relates to only one record in Table A.

### E-commerce Example

**Customers ↔ Orders**

* One customer can place many orders
* Each order belongs to one customer

### Example Tables

* `customers(customer_id, name, email)`
* `orders(order_id, customer_id, order_date, total_amount)`

Here, `orders.customer_id` is a **foreign key**.

### Diagram

```
Customers              Orders
---------              ------
customer_id (PK) ───▶ customer_id (FK)
name                   order_id
email                  order_date
                       total_amount
```

### Usage in E-commerce

* Tracking multiple purchases by a customer
* Generating order history

---

## 5. Many-to-Many Relationship (M:N)

### Definition

A **many-to-many relationship** exists when **multiple records in Table A relate to multiple records in Table B**.

This relationship is implemented using a **junction (bridge) table**.

### E-commerce Example

**Orders ↔ Products**

* One order can contain many products
* One product can be part of many orders

### Example Tables

* `orders(order_id, order_date)`
* `products(product_id, product_name, price)`
* `order_items(order_id, product_id, quantity)`

Here, `order_items` is the **junction table**.

### Diagram

```
Orders          Order_Items          Products
------          -----------          --------
order_id (PK) ─▶ order_id (FK)
                 product_id (FK) ◀─ product_id (PK)
                 quantity
```

### Usage in E-commerce

* Shopping cart implementation
* Order item details
* Inventory and sales tracking

---

## 6. Summary Table

| Relationship Type | Description                      | E-commerce Example |
| ----------------- | -------------------------------- | ------------------ |
| One-to-One        | One record maps to one record    | User ↔ Profile     |
| One-to-Many       | One record maps to many records  | Customer ↔ Orders  |
| Many-to-Many      | Many records map to many records | Orders ↔ Products  |

---

## 7. Conclusion

Database relationships are the **foundation of relational database design**, especially in e-commerce systems. They help organize complex data, enforce consistency, and support scalable application development.

Understanding these relationships allows developers to design efficient schemas for real-world applications like **online shopping platforms, payment systems, and inventory management**.
