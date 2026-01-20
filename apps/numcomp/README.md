# NumComp - Visual Numerical Computing

A visual programming environment for learning and experimenting with numerical computing concepts.

## Features

- **Visual Node-Based Interface**: Connect nodes to build computational workflows
- **Numerical Methods**: Root finding, integration, differentiation, ODE solvers
- **Real-time Execution**: Run workflows and see results instantly
- **Educational Focus**: Learn numerical algorithms through visual programming

## Available Nodes

### Input/Output
- **Number**: Input numeric values
- **Function**: Define mathematical functions using expressions
- **Output**: Display results
- **Plot**: Visualize data (coming soon)

### Root Finding
- **Bisection Method**: Find roots using interval bisection
- **Newton's Method**: Fast convergence using derivatives
- **Secant Method**: No derivative required (coming soon)
- **Fixed Point Iteration**: Iterative root finding (coming soon)

### Integration (Coming Soon)
- Trapezoidal Rule
- Simpson's Rule
- Romberg Integration

### Differentiation (Coming Soon)
- Numerical Differentiation
- Richardson Extrapolation

### ODE Solvers (Coming Soon)
- Euler's Method
- Runge-Kutta 4

## Usage

1. **Add Nodes**: Click nodes in the sidebar to add them to the canvas
2. **Position Nodes**: Drag nodes to arrange your workflow
3. **Connect Nodes**: Click and drag between node sockets (coming soon - manual connections in current version)
4. **Set Parameters**: Adjust values in node controls
5. **Run**: Click the Run button to execute your workflow
6. **View Results**: See outputs in the results panel

## Example Workflow

Find the root of f(x) = x² - 4:

1. Add a "Function" node and enter `x^2 - 4`
2. Add a "Number" node with initial guess `2.0`
3. Add a "Newton's Method" node
4. Add an "Output" node
5. Connect: Function → Newton's Method, Number → Newton's Method → Output
6. Click Run

## Technology

- **Visual Programming**: Custom canvas-based node editor
- **Numerical Computing**: math.js for mathematical operations
- **Visualization**: Chart.js for plotting

## Future Enhancements

- Drag-to-connect functionality
- More numerical methods (40+ algorithms from CST8233)
- Interactive visualizations
- Workflow templates
- Algorithm step-by-step visualization
- Export to code (Python/MATLAB)
