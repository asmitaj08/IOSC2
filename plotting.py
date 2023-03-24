import plotly.graph_objects as go

#plotly for vulnerability to weakness mapping : RQ3
fig = go.Figure(data=[go.Sankey(
    node = dict(
      pad = 15,
      thickness = 20,
      line = dict(color = "black", width = 0.5),                                                                                    
      label = ["busybox",'CVE-2011-2716', 'CVE-2011-5325', 'CVE-2013-1813', 'CVE-2014-9645', 'CVE-2015-9261', 'CVE-2016-2147', 'CVE-2016-2148', 'CVE-2016-6301', 'CVE-2017-16544', 'CVE-2018-1000500', 'CVE-2018-1000517', 'CVE-2018-20679', 'CVE-2019-5747', 'CVE-2021-42376', 'CVE-2021-42378', 'CVE-2021-42379', 'CVE-2021-42384', 'CVE-2021-42385', 'CVE-2021-42386','CWE-20','CWE-22','CWE-476','CWE-190','CWE-119','CWE-94','CWE-295','CWE-120','CWE-125','CWE-264','CWE-399','CWE-416'],
      color = ["blue",'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red'],
    ),
    textfont=dict(color="black", size=20 ),
    link = dict(
      source = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,2,3,4,5,               6,7,8,9,10,         11,12,13,14,15,       16,17,18,19], # indices correspond to labels, eg A, B, C, A1, A2, B1, B2, ...
      target = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 29, 20, 22, 23, 24, 30, 25, 26, 27, 28, 28, 22, 31, 31, 31, 31, 31],
      value = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ))])

#plotly for package version to firmware date mapping : RQ2
# fig = go.Figure(data=[go.Sankey(
#     node = dict(
#       pad = 15,
#       thickness = 20,
#       line = dict(color = "black", width = 0.5),                                                        #5
#       label = ["openssl","0.9.7[2002-2007]","0.9.8[2005-2015]","1.0.1[2012-2016]","1.0.2[2015-2019]","1.1.1[2018-contd.]","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021","2022"],
#       color = ["blue","red","red","yellow","yellow","green"],
#     ),
#     textfont=dict(color="black", size=20 ),
#     link = dict(
#       source = [0,0,0,0,0, 1,1, 2,2,2,2,2,2,        3,3,3,3,   4,4,4,4,4,4,   5,5,5], # indices correspond to labels, eg A, B, C, A1, A2, B1, B2, ...
#       target = [1,2,3,4,5, 9,10, 6, 7, 9, 10, 11, 12, 10, 11, 13, 16, 10, 11, 13, 14, 15, 16, 14, 15, 16],
#       value = [1,1,1,1,1,  1,1, 1,1,1,4,5,3        ,1,2,1,1     ,1,1,1,11,21,26   ,1,1,2],
#   ))])

fig.show()