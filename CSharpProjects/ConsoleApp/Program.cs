/*************
 * ConsoleApp
 * by Jacob L. Haskins
 * July 8, 2020
 * Copyright (c) 2020.  All Rights Reserved.
**************/

using System;
using System.Diagnostics;

namespace ConsoleApp
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");

            ProcessStartInfo startInfo = new ProcessStartInfo();
            startInfo.CreateNoWindow = false;
            startInfo.UseShellExecute = false;
            startInfo.FileName = @"C:\Program Files\LibreOffice\program\soffice.bin";
            startInfo.WindowStyle = ProcessWindowStyle.Hidden;
            startInfo.Arguments = @"C:\dev\dev\UiPathProjects\CurrencyConverter-StudioX\Report.xlsx";

            try
            {
                using (Process exeProcess = Process.Start(startInfo))
                {
                    exeProcess.WaitForExit();
                }
            }
            catch(Exception e)
            {
                Console.WriteLine("99 problems...\n\n", e.Message);
            }


            Console.WriteLine("\n\nPress Enter to continue.");
            Console.ReadLine();
        }
    }
}
