    const printElement = (element: string):void => {
        const { height, width } = screen;
        const mywindow = window.open("", "PRINT", `"height=${height},width=${width}`);
        console.log(window.document);
        if (mywindow) {
            const headElement = window.document.getElementsByName("head");
            console.log("head element:", headElement);
            const elementForInnerHtml = document.getElementById(element);
            if (elementForInnerHtml) {
                mywindow.document.write("<html><head><title>" + document.title + "</title>");
                mywindow.document.write("<style>\n" + "@media print {\n" + "body * {" + "visibility: visible !important;" + "} " + "</style>");
                mywindow.document.write("</head><body >");

                mywindow.document.head.appendChild(window.document.head.cloneNode(true));
                mywindow.document.write(elementForInnerHtml.innerHTML);
                mywindow.document.write("<input type='button' onclick='window.print()'>Print</input>");
                mywindow.document.write("</body></html>");

                mywindow.document.close(); // necessary for IE >= 10
                mywindow.focus(); // necessary for IE >= 10*/

                mywindow.print();
                mywindow.close();
            }
        }
    }
