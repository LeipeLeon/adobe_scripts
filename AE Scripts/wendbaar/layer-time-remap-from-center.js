tPos = transform.position;
tMid = [thisComp.width/2,thisComp.height/2];
N=Math.sqrt(thisComp.width/2*thisComp.width/2,thisComp.height/2*thisComp.height/2);
A=tPos[0]-tMid[0];
B=tPos[1]-tMid[1];
C=Math.sqrt(A*A+B*B);

time-(C/N);
