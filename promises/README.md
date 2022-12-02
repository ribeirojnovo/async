# Awesome Hierarchical Sorting Machine

Awesome Hierarchical Sorting Machine is simple node app, which sorts specific datasets prioprity columns by specific metrics.

## **Technical Requirements**

- Node Version: v 10.x.x

  

## **Technological Stack**

### *Development*

- [Typescript](https://www.typescriptlang.org/index.html) - v 3.9.x

### *Testing*

- [Jest](https://jestjs.io/)

### *Linting and Code Styling*

- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)

## **Installation**

###  &nbsp;&nbsp; *1. Clone Repository*

> ```
> git clone XXXXXXXXXXX
> ```

###  &nbsp;&nbsp; *2. Install Dependencies*

> ```
> npm install
> ```

###  &nbsp;&nbsp; *3. Run*

> ```
> npm start
> ```



## **Run Examples**
Each one of the scripts represent different situations/feature of how the hierarchical sort can be used.  
For each different script, there is a corresponding try-out file, which is a sandbox where the user can try everything they want.

### &nbsp;&nbsp; *1.Sort dataset string using a single metric - 'net_sales'  - printed to console*

  > ```
  > npm run try:simple
  > ```

### &nbsp;&nbsp; *2. Sort dataset file using single metric - 'net_sales'  - saving to an output file*

  > ```
  > npm run try:simpleMetric
  > ```

### &nbsp;&nbsp; *3. Sort dataset file with different metrics per Property using a Dictionary - saving to an ouput file*

  > ```
  > npm run try:multipleMetric
  > ```

### &nbsp;&nbsp; *3. Sort dataset file using a custom sorting strategy method - saving to an ouput file*

  > ```
  > npm run try:functionMetric
  > ```


## Running Tests

There is small suite of tests, both *unit* and *integration*.

I built some *unit tests* for the *services and helpers*.

To test the *Hierarchical Sorting* I used the *Integration Tests* to test all the sorting cases flow from input to output.

###  &nbsp;&nbsp; *1. Single Run*

> ```
> npm run test
> ```

###  &nbsp;&nbsp; *2. Watch Mode*

> ```
> npm run test:watch
> ```

###  &nbsp;&nbsp; *3. Single Run with Coverage files generation*

> ```
> npm run test:cov
> ```

## Commiting 

###  &nbsp;&nbsp; *Commitizen*

[Commitizen](https://github.com/commitizen/cz-cli) helps me a lot in every project I work.

It obliges me refine my commit messages and correctly describe my work. Consequently turns my commit history very clean and understandable for everyone :)

Just give it a try:

> ```
> npm run commit
> ```



## *Thank you!! Hope you enjoyed :D*

