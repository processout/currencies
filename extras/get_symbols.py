import urllib.request
import re

def runThroughCurrencies():
  fileName = "../node/currencies.js"
  with open(fileName) as f:
    reconstructed = ""
    listBegins = False
    for line in f:
      if "var isoCurrencies = {" in line:
        listBegins = True
      elif listBegins and "}" in line and "," not in line:
        break
      elif listBegins:
        if not "symbol: " in line:
            reconstructed += line
        if "name: " in line:
          name = line.replace("      name: ", "").replace('"', "").replace(",", "").replace("\n", "")
          symbol = extract_symbol(name)
          reconstructed += "      symbol: \"" + symbol + "\",\n"
    print(reconstructed)

def extract_symbol(currencyName):
  currencyName = currencyName.replace(" ", "_")
  try:
    page = urllib.request.urlopen('https://en.wikipedia.org/wiki/' + currencyName)
  except:
    return "UNKNOWN"
  html = page.read()
  html = html.decode("utf-8")

  found = False
  for line in html.splitlines():
    if 'title="Currency symbol">Symbol</a></th>' in line:
      found = True
    elif found:
      line = re.sub('<[^>]+>', '', line)
      return line.replace("<td>", "").replace("</td>", "")

  return "NOTFOUND"

runThroughCurrencies()


'''
<tr>
<th scope="row"><a href="/wiki/Currency_symbol" title="Currency symbol">Symbol</a></th>
<td>G</td>
</tr>
'''