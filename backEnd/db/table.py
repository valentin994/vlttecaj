import pandas as pd

#pitdata = {'id': [0, 1, 2],
#           'pitanja': ['Prvo pitanje', 'Drugo pitanje', 'Trece pitanje']}
#
#output = pd.DataFrame(pitdata)
#output.set_index('id', inplace=True)
#
#output.to_csv('tablecontent.csv')

odgdata = {'id': [0, 1, 2, 3, 4, 5],
           'odgovori': ['Prvi0', 'Prvi1', 'Drugi0', 'Drugi1', 'Treci1', 'Treci0'],
           'tocnsot': [0, 1, 0, 1, 1, 0]
           }
output = pd.DataFrame(odgdata)
output.set_index('id', inplace=True)

output.to_csv('tableodgovoricontent.csv')