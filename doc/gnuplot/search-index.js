var searchIndex = [{ty:"mod",name:"",path:"gnuplot",desc:"A simple gnuplot controller."},{ty:"struct",name:"Axes2D",path:"gnuplot",desc:"2D axes that is used for drawing 2D plots"},{ty:"struct",name:"Axes2D",path:"gnuplot",desc:"2D axes that is used for drawing 2D plots"},{ty:"enum",name:"Coordinate",path:"gnuplot",desc:"Specifies how to interpret the coordinate passed to a plotting command"},{ty:"variant",name:"Graph",path:"gnuplot",desc:"Coordinates are done relative to a graph (i.e. an axis set). (0, 0) is the bottom left corner and (1, 1) is the top right corner.\nYou'd use this to place labels and other objects so that they remain in the same place relative to the graph no matter what you have plotted.",parent:'7577'},{ty:"variant",name:"Axis",path:"gnuplot",desc:"Coordinates match those on the axes. You'd use this to place labels and other objects relative to regions of interest in the graph (e.g. labeling the peak of a function)",parent:'7577'},{ty:"mod",name:"figure",path:"gnuplot",desc:""},{ty:"struct",name:"Figure",path:"gnuplot::figure",desc:"A figure that may contain multiple axes"},{ty:"method",name:"new",path:"gnuplot::figure",desc:"Creates a new figure",parent:'2047'},{ty:"method",name:"set_terminal",path:"gnuplot::figure",desc:"Sets the terminal for gnuplot to use, as well as the file to output the figure to.\nTerminals that spawn a GUI don't need an output file, so pass an empty string for those.",parent:'2047'},{ty:"method",name:"set_grid",path:"gnuplot::figure",desc:"Sets the dimensions of the grid that you can use to\nplace multiple axes on\n# Arguments\n* `rows` - Number of rows. Set to 0 to disable the grid\n* `cols` - Number of columns. Set to 0 to disable the grid",parent:'2047'},{ty:"method",name:"axes2d",path:"gnuplot::figure",desc:"Creates a set of 2D axes",parent:'2047'},{ty:"method",name:"axes3d",path:"gnuplot::figure",desc:"Creates a set of 3D axes",parent:'2047'},{ty:"method",name:"show",path:"gnuplot::figure",desc:"Launch a gnuplot process and display the figure on it",parent:'2047'},{ty:"method",name:"echo",path:"gnuplot::figure",desc:"Echo the commands that if piped to a gnuplot process would display the figure\n# Arguments\n* `writer` - A function pointer that will be called multiple times with the command text and data",parent:'2047'},{ty:"method",name:"echo_to_file",path:"gnuplot::figure",desc:"Save to a file the the commands that if piped to a gnuplot process would display the figure\n# Arguments\n* `filename` - Name of the file",parent:'2047'},{ty:"mod",name:"options",path:"gnuplot",desc:""},{ty:"enum",name:"PlotOption",path:"gnuplot::options",desc:"An enumeration of plot options you can supply to plotting commands, governing\nthings like line width, color and others"},{ty:"variant",name:"PointSymbol",path:"gnuplot::options",desc:"Sets the symbol used for points. The valid characters are as follows:",parent:'3151'},{ty:"variant",name:"PointSize",path:"gnuplot::options",desc:"Sets the size of the points. The size acts as a multiplier, with 1.0 being the default.",parent:'3151'},{ty:"variant",name:"Caption",path:"gnuplot::options",desc:"Sets the caption of the plot element. Set to empty to hide it from the legend.",parent:'3151'},{ty:"variant",name:"LineWidth",path:"gnuplot::options",desc:"Sets the width of lines.",parent:'3151'},{ty:"variant",name:"Color",path:"gnuplot::options",desc:"Sets the color of the plot element. The passed string can be a color name\n(e.g. \"black\" works), or an HTML color specifier (e.g. \"#FFFFFF\" is white). This specifies the fill color of a filled plot.",parent:'3151'},{ty:"variant",name:"BorderColor",path:"gnuplot::options",desc:"Sets the color of the border of a filled plot (if it has one). The passed string can be a color name\n(e.g. \"black\" works), or an HTML color specifier (e.g. \"#FFFFFF\" is white).",parent:'3151'},{ty:"variant",name:"LineStyle",path:"gnuplot::options",desc:"Sets the style of the line. Note that not all gnuplot terminals support dashed lines. See DashType for the available styles.",parent:'3151'},{ty:"variant",name:"FillAlpha",path:"gnuplot::options",desc:"Sets the transparency of a filled plot. `0.0` - fully transparent, `1.0` - fully opaque",parent:'3151'},{ty:"variant",name:"FillRegion",path:"gnuplot::options",desc:"Sets the fill region. See FillRegion for the available regions.",parent:'3151'},{ty:"variant",name:"ArrowType",path:"gnuplot::options",desc:"Sets what an arrowhead looks like",parent:'3151'},{ty:"variant",name:"ArrowSize",path:"gnuplot::options",desc:"Sets the size of the arrowhead. This is specified in the units of graph (i.e. `1.0` would make the arrow as big as the graph).",parent:'3151'},{ty:"enum",name:"FillRegion",path:"gnuplot::options",desc:"An enumeration of possible fill regions"},{ty:"variant",name:"Above",path:"gnuplot::options",desc:"",parent:'3203'},{ty:"variant",name:"Below",path:"gnuplot::options",desc:"",parent:'3203'},{ty:"variant",name:"Between",path:"gnuplot::options",desc:"",parent:'3203'},{ty:"enum",name:"AlignType",path:"gnuplot::options",desc:"An enumeration of possible text and label alignments"},{ty:"variant",name:"AlignLeft",path:"gnuplot::options",desc:"",parent:'3207'},{ty:"variant",name:"AlignRight",path:"gnuplot::options",desc:"",parent:'3207'},{ty:"variant",name:"AlignCenter",path:"gnuplot::options",desc:"",parent:'3207'},{ty:"variant",name:"AlignTop",path:"gnuplot::options",desc:"",parent:'3207'},{ty:"variant",name:"AlignBottom",path:"gnuplot::options",desc:"",parent:'3207'},{ty:"enum",name:"DashType",path:"gnuplot::options",desc:"An enumeration of possible dash styles"},{ty:"variant",name:"Solid",path:"gnuplot::options",desc:"",parent:'3213'},{ty:"variant",name:"SmallDot",path:"gnuplot::options",desc:"",parent:'3213'},{ty:"variant",name:"Dot",path:"gnuplot::options",desc:"",parent:'3213'},{ty:"variant",name:"Dash",path:"gnuplot::options",desc:"",parent:'3213'},{ty:"variant",name:"DotDash",path:"gnuplot::options",desc:"",parent:'3213'},{ty:"variant",name:"DotDotDash",path:"gnuplot::options",desc:"",parent:'3213'},{ty:"enum",name:"ArrowheadType",path:"gnuplot::options",desc:"An enumeration of possible arrow head styles"},{ty:"variant",name:"Open",path:"gnuplot::options",desc:"An arrow head shaped like a 'V'",parent:'3220'},{ty:"variant",name:"Closed",path:"gnuplot::options",desc:"An arrow head shaped like an outlined triangle",parent:'3220'},{ty:"variant",name:"Filled",path:"gnuplot::options",desc:"An arrow head shaped like a filled triangle",parent:'3220'},{ty:"variant",name:"NoArrow",path:"gnuplot::options",desc:"No arrow head",parent:'3220'},{ty:"enum",name:"AutoOption",path:"gnuplot::options",desc:"An enumeration of something that can either be fixed (e.g. the maximum of X values),\nor automatically determined"},{ty:"variant",name:"Fix",path:"gnuplot::options",desc:"Fixes the value to a specific value",parent:'3225'},{ty:"variant",name:"Auto",path:"gnuplot::options",desc:"Lets the value scale automatically",parent:'3225'},{ty:"enum",name:"LabelOption",path:"gnuplot::options",desc:"An enumeration of label options that control label attributes"},{ty:"variant",name:"TextOffset",path:"gnuplot::options",desc:"Sets the offset of the label in characters",parent:'3232'},{ty:"variant",name:"Font",path:"gnuplot::options",desc:"Sets the font of the label. The string specifies the font type (e.g. \"Arial\") and the number specifies the size (the units are terminal dependent, but are often points)",parent:'3232'},{ty:"variant",name:"TextColor",path:"gnuplot::options",desc:"Sets the color of the label text. The passed string can be a color name\n(e.g. \"black\" works), or an HTML color specifier (e.g. \"#FFFFFF\" is white)",parent:'3232'},{ty:"variant",name:"Rotate",path:"gnuplot::options",desc:"Rotates the label by a certain number of degrees",parent:'3232'},{ty:"variant",name:"TextAlign",path:"gnuplot::options",desc:"Sets the horizontal alignment of the label text (default is left alignment). See AlignType.",parent:'3232'},{ty:"variant",name:"MarkerSymbol",path:"gnuplot::options",desc:"Sets a marker for the label. By default no marker is drawn. The valid characters are as follows:",parent:'3232'},{ty:"variant",name:"MarkerColor",path:"gnuplot::options",desc:"Sets the color of the marker. The passed string can be a color name\n(e.g. \"black\" works), or an HTML color specifier (e.g. \"#FFFFFF\" is white)",parent:'3232'},{ty:"variant",name:"MarkerSize",path:"gnuplot::options",desc:"Sets the size of the marker. The size acts as a multiplier, with 1.0 being the default.",parent:'3232'},{ty:"enum",name:"TickOption",path:"gnuplot::options",desc:"An enumeration of axis tick options"},{ty:"variant",name:"OnAxis",path:"gnuplot::options",desc:"Specifies whether the ticks are drawn at the borders of the plot, or on the axis",parent:'3278'},{ty:"variant",name:"Mirror",path:"gnuplot::options",desc:"If the axes are drawn on the border, this specifies whether to draw the ticks on the opposite border as well",parent:'3278'},{ty:"variant",name:"Inward",path:"gnuplot::options",desc:"If the axes are drawn on the border, this specifies whether to draw the ticks pointing inward or outward",parent:'3278'},{ty:"variant",name:"MinorScale",path:"gnuplot::options",desc:"Sets the scale of the minor ticks",parent:'3278'},{ty:"variant",name:"MajorScale",path:"gnuplot::options",desc:"Sets the scale of the major ticks",parent:'3278'},{ty:"enum",name:"Tick",path:"gnuplot::options",desc:"Specifies a type of axis tick"},{ty:"variant",name:"Major",path:"gnuplot::options",desc:"Major ticks have position and an optional label. The label may have a single C-style format specifier which will be replaced by the location of the tick",parent:'3299'},{ty:"variant",name:"Minor",path:"gnuplot::options",desc:"Minor ticks only have position",parent:'3299'},{ty:"enum",name:"BorderLocation2D",path:"gnuplot::options",desc:"Plot border locations"},{ty:"variant",name:"Bottom",path:"gnuplot::options",desc:"",parent:'3315'},{ty:"variant",name:"Left",path:"gnuplot::options",desc:"",parent:'3315'},{ty:"variant",name:"Top",path:"gnuplot::options",desc:"",parent:'3315'},{ty:"variant",name:"Right",path:"gnuplot::options",desc:"",parent:'3315'},{ty:"enum",name:"LegendOption",path:"gnuplot::options",desc:"Legend options"},{ty:"variant",name:"Reverse",path:"gnuplot::options",desc:"Puts curve samples to the left of the label",parent:'3324'},{ty:"variant",name:"Invert",path:"gnuplot::options",desc:"Displays legend entries in opposite order",parent:'3324'},{ty:"variant",name:"Horizontal",path:"gnuplot::options",desc:"Makes the legend horizontal (default is vertical)",parent:'3324'},{ty:"variant",name:"Placement",path:"gnuplot::options",desc:"Specifies the location of the legend. The first argument specifies the horizontal\nplacement with respect to its position, and the second argument specifies the vertical placement",parent:'3324'},{ty:"variant",name:"Title",path:"gnuplot::options",desc:"Title of the legend",parent:'3324'},{ty:"variant",name:"MaxRows",path:"gnuplot::options",desc:"Specifies the maximum number of rows, when the legend is vertical",parent:'3324'},{ty:"variant",name:"MaxCols",path:"gnuplot::options",desc:"Specifies the maximum number of columns, when the legend is horizontal",parent:'3324'},{ty:"mod",name:"datatype",path:"gnuplot",desc:""},{ty:"trait",name:"DataType",path:"gnuplot::datatype",desc:""},{ty:"tymethod",name:"get",path:"gnuplot::datatype",desc:"",parent:'3385'}];var allPaths = {'3155':{type:'variant',name:'PointSymbol'},'3216':{type:'variant',name:'Dot'},'3294':{type:'variant',name:'MinorScale'},'3230':{type:'variant',name:'Auto'},'3319':{type:'variant',name:'Left'},'3327':{type:'variant',name:'Horizontal'},'3348':{type:'variant',name:'MaxCols'},'3763':{type:'mod',name:'axes2d'},'3151':{type:'enum',name:'PlotOption'},'6905':{type:'trait',name:'Axes2DPrivate'},'3239':{type:'variant',name:'TextOffset'},'3321':{type:'variant',name:'Top'},'3334':{type:'variant',name:'Placement'},'0':{type:'mod',name:'gnuplot'},'3189':{type:'variant',name:'FillAlpha'},'3258':{type:'variant',name:'Rotate'},'3224':{type:'variant',name:'NoArrow'},'3175':{type:'variant',name:'Color'},'3266':{type:'variant',name:'MarkerSymbol'},'3278':{type:'enum',name:'TickOption'},'3290':{type:'variant',name:'Inward'},'3313':{type:'variant',name:'Minor'},'3205':{type:'variant',name:'Below'},'1664':{type:'mod',name:'writer'},'3149':{type:'mod',name:'options'},'3217':{type:'variant',name:'Dash'},'7585':{type:'variant',name:'Axis'},'3276':{type:'variant',name:'MarkerSize'},'3262':{type:'variant',name:'TextAlign'},'3225':{type:'enum',name:'AutoOption'},'7577':{type:'enum',name:'Coordinate'},'3223':{type:'variant',name:'Filled'},'3286':{type:'variant',name:'Mirror'},'3325':{type:'variant',name:'Reverse'},'3383':{type:'mod',name:'datatype'},'3210':{type:'variant',name:'AlignCenter'},'3385':{type:'trait',name:'DataType'},'3203':{type:'enum',name:'FillRegion'},'3211':{type:'variant',name:'AlignTop'},'3232':{type:'enum',name:'LabelOption'},'3181':{type:'variant',name:'BorderColor'},'3209':{type:'variant',name:'AlignRight'},'1670':{type:'trait',name:'PlotWriter'},'3214':{type:'variant',name:'Solid'},'3218':{type:'variant',name:'DotDash'},'7581':{type:'variant',name:'Graph'},'3324':{type:'enum',name:'LegendOption'},'3219':{type:'variant',name:'DotDotDash'},'3204':{type:'variant',name:'Above'},'3206':{type:'variant',name:'Between'},'3272':{type:'variant',name:'MarkerColor'},'3315':{type:'enum',name:'BorderLocation2D'},'3165':{type:'variant',name:'Caption'},'3193':{type:'variant',name:'FillRegion'},'3317':{type:'variant',name:'Bottom'},'3222':{type:'variant',name:'Closed'},'3350':{type:'mod',name:'private'},'7567':{type:'mod',name:'coordinates'},'3221':{type:'variant',name:'Open'},'3323':{type:'variant',name:'Right'},'3213':{type:'enum',name:'DashType'},'7571':{type:'mod',name:'external'},'7586':{type:'trait',name:'CoordinatePrivate'},'1974':{type:'mod',name:'figure'},'2047':{type:'struct',name:'Figure'},'3220':{type:'enum',name:'ArrowheadType'},'3326':{type:'variant',name:'Invert'},'3761':{type:'mod',name:'internal'},'3340':{type:'variant',name:'Title'},'3215':{type:'variant',name:'SmallDot'},'3159':{type:'variant',name:'PointSize'},'3309':{type:'variant',name:'Major'},'3299':{type:'enum',name:'Tick'},'3229':{type:'variant',name:'Fix'},'3254':{type:'variant',name:'TextColor'},'3282':{type:'variant',name:'OnAxis'},'3344':{type:'variant',name:'MaxRows'},'7543':{type:'trait',name:'Axes3DPrivate'},'3212':{type:'variant',name:'AlignBottom'},'7529':{type:'mod',name:'axes3d'},'3248':{type:'variant',name:'Font'},'3185':{type:'variant',name:'LineStyle'},'3197':{type:'variant',name:'ArrowType'},'3201':{type:'variant',name:'ArrowSize'},'3207':{type:'enum',name:'AlignType'},'3169':{type:'variant',name:'LineWidth'},'3775':{type:'struct',name:'Axes2D'},'3298':{type:'variant',name:'MajorScale'},'3208':{type:'variant',name:'AlignLeft'}};