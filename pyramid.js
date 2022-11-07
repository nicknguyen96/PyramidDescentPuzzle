
// assume the pyramid always has height > 1
function findPathProduct(input, target) {

    let root = new Node(input[0][0], 0);
    let tree = [[root]];
    let row = 0;
    while (row < input.length - 1) {
        let currentRow = [];
        for (let i = 0; i < tree[row].length; i++) {
            let currentNode = tree[row][i];
            const leftNode = new Node(input[row + 1][currentNode.index] * currentNode.value, currentNode.index);
            const rightNode = new Node(input[row + 1][currentNode.index + 1] * currentNode.value, currentNode.index + 1);
            leftNode.parent = currentNode;
            rightNode.parent = currentNode;
            currentRow.push(leftNode);
            currentRow.push(rightNode);
        }
        tree.push(currentRow);
        row++;
    }
    // console.log(tree);
    // traverse the last row of the tree
    // console.log('here')
    for (let i = 0; i < tree[tree.length - 1].length; i++) {
        let currentNode = tree[tree.length - 1][i];
        if (currentNode.value === target) {
            let parent = currentNode.parent;
            let result = '';
            while (parent != null) {
                if (parent.index === currentNode.index) {
                    result = 'L' + result;
                } else {
                    result = 'R' + result;
                }
                currentNode = parent;
                parent = currentNode.parent;
            }
            return result;
        }
    }
    return '';
}

class Node {
    constructor(value, index) {
        this.value = value;
        this.parent = null;
        this.index = index;
    }
}

export default (findPathProduct);