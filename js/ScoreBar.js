    window.onload=function(){ Paper = new Raphael('canvas', 400, 250);
    var meterMax,meterMin,meterMiddle,mMStyle,MStyle,meterUp,meterDown,rStyles;
    rStyles={'stroke':'#DEDEDE',strokeWidth: '3'};//Style for each rectangle
    mMStyle={'fill':'#A3A3A3'};//Meter Marking Style
    MStyle={'stroke':'#A3A3A3','stroke-width':'3','stroke-dasharray':'-'};

    function drawRectangle(x, y, height, width, level, color, Paper) {
        var rect,innerRect,
        pointerPath,ry,pointer,displayScore,headerRectangle,hStyle,lStyle,dStyle,iRectStyle,
        totalScore,compScore,addiSkillScore,projExpScore,pStyle;
        //Style Objects
        iRectStyle={'fill':color,'stroke':'#EFEFEF'};
        hStyle={'fill':'#FFFFFF','font-family':'sans-serif','font-size':'16','font-weight':'bolder'};
        lStyle={'font-size':'10','font-family':'sans-serif'};
        dStyle={'fill': color,'font-family':'sans-serif','font-size':'9','font-weight':'bolder','stroke': color,'stroke-width':'0.4'};
        pStyle={'stroke':'#A3A3A3','stroke-width':'1','stroke-linejoin':'round','fill':'0-#F7F5F5-#E1E1E1'};

        //Draw the innerRect
        if (level===0)
        {ry=20;} 
            else 
            {ry=150-(level*(height/100))+50;}
        innerRect = Paper.rect(x, ry, width, (level*(height/100)), 4).attr(iRectStyle);

        //Draw the pointer for each level
        pointer = Paper.path("M " + (x - 1) + " " + ry + " l -10 10 l -20 0 l 0 -20 l 20 0 z").attr(pStyle);

        //Embeddint the level into the pointers
        displayScore = Paper.text((x - 20), ry, level).attr(dStyle).glow({'width':'5','color':color});

        //Drawing the Header Rectangle
        headerRectangle = Paper.rect(0, 0, 400, 30).attr({'fill':'black','stroke':'black'});
        //Writing text on the header
        headerText = Paper.text(40, 15, "My Score").attr(hStyle);

        //Embedding Labels to the bars
        totalScore = Paper.text(50,220,'Total Score').attr(lStyle);
        compScore = Paper.text(170,220,'Competency\n Score').attr(lStyle);
        addiSkillScore = Paper.text(250,220,'Additional Skill\n Score').attr(lStyle);
        projExpScore = Paper.text(340,220,'Project Experience\n Score').attr(lStyle);
        return Paper.path("M " + x + " " + y + " l " + width + " 0 l 0 " + height + " l -" + width + " 0 l 0 -" + height);
    }
    //Making the meter Markings
    meterMax = Paper.text(110, 55,'100').attr(mMStyle);
    meterMin = Paper.text(110, 200,'0').attr(mMStyle);
    meterMiddle = Paper.text(110, 124,'50').attr(mMStyle);

    //Making the meter
    meterUp = Paper.path("M 110 60 l 0 60").attr(MStyle);
    meterDown = Paper.path("M 110 130 l 0 65").attr(MStyle);

    //Draw four rectangle according to the shapes given
    drawRectangle(50,50,150,20,40,'#A2166E', Paper).attr(rStyles);
    drawRectangle(170, 50, 150, 20, 40, '#EB8620', Paper).attr(rStyles);
    drawRectangle(250, 50, 150, 20, 50, '#EB8620', Paper).attr(rStyles);
    drawRectangle(330, 50, 150, 20, 60, '#EB8620', Paper).attr(rStyles);};
